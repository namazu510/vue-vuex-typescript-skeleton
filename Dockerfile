FROM node:7.2.0
MAINTAINER namazu510 <namazu510@hotmail.co.jp>

RUN useradd --user-group --create-home --shell /bin/false app

ENV APP_ROOT=/usr/src/app
RUN mkdir $APP_ROOT

WORKDIR $APP_ROOT

# package.jsonに更新があった場合のみ npm installする
COPY package.json $APP_ROOT
RUN chown -R app:app $APP_ROOT
USER app
RUN npm install && npm cache clean

# ソフトウェア本体ファイルを引いてくる
USER root
COPY . $APP_ROOT
RUN chown -R app:app $APP_ROOT

# ビルド及びサーバー起動

# 環境変数設定
ENV PORT=8080

USER app
RUN npm run build
EXPOSE 8080
CMD ["npm","start"]