// ソフトで使う共通変数とかで全体に影響するもののアンビエント宣言.

// 環境変数定義
// webpackのdefinePluginでコンパイル時にインライン展開される.
interface process {
    env : {
        NODE_ENV : string;
    };
}

declare var process;
