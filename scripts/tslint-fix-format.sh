#!/usr/bin/env bash

#src配下のtsファイルに対しtslintを実行しauto-fixする.
find src -name *.ts | xargs tslint --fix