#!/bin/bash

#CircleCIにおいてはんぱなく時間がかかるnode_moduelsをキャッシュするようにする
#package.jsonを取っといてそれが更新されてたらnpm update

#npm_installの処理
npm_install(){
  echo "node_moduelsをinstallします."
  cd ~/vue-vuex-typescript-skeleton
  npm install

  echo "package.jsonをキャッシュに保存します."
  \cp -f package.json ~/cache/package.json

  echo "node_moduelsをキャッシュに保存します."
  rm -rf ~/cache/node_modules
  cp -r node_modules ~/cache/node_modules
}

#cacheにpackage.jsonがないとき？
if [ ! -e ~/cache/package.json ]; then
echo "キャッシュにpackage.jsonは存在しません"
yarn
cd ~/vue-vuex-typescript-skeleton
exit 0
fi

#package.jsonが同じか調べる
if diff -q ~/cache/package.json ~/vue-vuex-typescript-skeleton/package.json >/dev/null ; then
    # 同じだった場合 node_modulesをコピー
    echo "package.jsonは更新されていません. node_modulesをキャッシュからコピーします"
    cp -r ~/cache/node_modules ~/vue-vuex-typescript-skeleton/node_modules
    echo "node_modulesをキャッシュからコピーしました"
else
    # 違っていた場合
    echo "キャッシュ済みデータとpackage.jsonは異なっています."
    yarn
fi

cd ~/vue-vuex-typescript-skeleton