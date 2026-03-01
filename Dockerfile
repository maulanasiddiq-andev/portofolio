# Stage 1: Build the Angular application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
# We use the configuration production to optimize the build
RUN npm run build --configuration=production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
# The path depends on your angular.json build output-path. 
# In Angular 17+ it's usually dist/<project-name>/browser
COPY --from=build /app/dist/portofolio-web/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Configure Nginx to route all requests to index.html (SPA routing)
RUN rm /etc/nginx/conf.d/default.conf
RUN echo "server { \
    listen 8080; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
