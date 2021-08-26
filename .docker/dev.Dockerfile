FROM node:16.3.0-buster

# Install basic required libs
RUN apt-get update -qq && apt-get install -y ca-certificates
RUN npm install --global pm2

# Set working directory
ENV APP_ROOT /var/www/app
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# Add project files (included dependencies and build directory)
COPY . .

# Reinstall dependencies and build
RUN yarn install
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start server
# FIXME: https://github.com/vercel/next.js/discussions/10675#discussioncomment-60915
CMD ["sh", "-c", "pm2 list && pm2-runtime start pm2.config.json"]
