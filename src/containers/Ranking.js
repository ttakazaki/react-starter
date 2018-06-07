// src/containers/Ranking.js
import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

// Reducerを定義後に実装します
const mapStateToProps = (state, ownProps) => ({
  categoryId: ownProps.categoryId,

  // カテゴリ情報, ランキング情報をランキングコンポーネントに渡す
  category: state.Ranking.category,
  ranking: state.Ranking.ranking,
  error: state.Ranking.error
});

const mapDispatchToProps = dispatch => ({
  // onMountとonUpdateをfetchRankingを接続
  onMount (categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  },
  onUpdate (categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);