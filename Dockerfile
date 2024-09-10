# FROM 指定基础镜像
# WORKDIR 设置工作目录
# RUN 执行shell命令
# ENV 设置环境变量
# COPY 复制文件到镜像中
# USER 指定用户
# EXPOSE 暴露端口
# CMD 容器启动时的执行命令，docker run的参数会覆盖CMD指定的参数，多个CMD，只有最后一个CMD才多个
# ENTRYPOINT 容器启动时的入口点命令，docker run的参数不会覆盖ENTRYPOINT指定的参数

# # 依赖阶段
# FROM node:alpine AS deps

# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json package-lock.json ./
# # 执行shell命令
# RUN npm install

# # 构建阶段
# FROM node:alpine AS builder
# # 设置工作目录
# WORKDIR /app
# # 复制文件到镜像中
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN npm run build && npm install

# # 运行阶段
# FROM node:alpine AS runner
# WORKDIR /app
# # 设置环境变量
# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# # 如果你不使用默认配置，你只需要复制next.config.js
# # COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs
# # 暴露端口
# EXPOSE 3000

# ENV PORT 3000

# # 禁用Nextjs遥测
# ENV NEXT_TELEMETRY_DISABLED 1
# # 为容器提供默认的执行命令和参数，
# CMD ["node_modules/.bin/next", "start"]
FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build
CMD ["npm", "start"]