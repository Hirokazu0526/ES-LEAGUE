export default function ({ store, params }) {
    // ストアからデータを取得し、ページコンポーネントに渡す
    const data = store.state.competitionLists; // ストアからデータを取得する
  
    // ページコンポーネントにデータを渡す
    params.data = data;
  }