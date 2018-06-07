// src/components/Ranking.js
import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

// ライフサイクルメソッドを使うのでclassに変更
export default class Ranking extends React.Component {
  // componentWillMount, componentWillReceivePropsを追加
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      // props.categoryIdに変化があるので、ページ遷移が発生している
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    const { category, ranking, error } = this.props
    return (
      <div>
        <h2>{
          typeof category !== 'undefined'
            ? `${category.name}のランキング`
            : ''
        }</h2>

        {(() => {
          if (error) {
            // エラー表示
            return <p>エラーが発生しました。リロードしてください。</p>
          } else if (typeof ranking === 'undefined') {
            // リクエスト完了前
            return <p>読み込み中...</p>
          } else {
            // ランキングの表示
            return (
              ranking.map((item, i) => (
                <Card 
                  key={`ranking-item-${item.code}`}
                  style={{ maxWidth: '500px', margin: '32px auto' }}
                >
                  <CardMedia
                    image={item.imageUrl}
                    title={`${i + 1}位 ${item.name}`}
                    style={{ height: '200px' }} 
                  />
                  <CardContent>
                    <Typography type="title">
                      {`${i + 1}位 ${item.name}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      raised
                      color="secondary"
                      fullWidth
                      href={item.url}
                    >商品ページへ</Button>
                  </CardActions>
                </Card>
              ))
            )
          }
        })()}
      </div>
    );
  }
}
Ranking.propTypes = {
  categoryId: PropTypes.string,
  // onMount, onUpdateを追加
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
Ranking.defaultProps = {
  categoryId: '1'
};