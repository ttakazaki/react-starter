import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Ranking from './containers/Ranking'
import Nav from './containers/Nav'
import Reboot from 'material-ui/Reboot'; // 追加
import AppBar from 'material-ui/AppBar'; // 追加
import Toolbar from 'material-ui/Toolbar'; // 追加
import Typography from 'material-ui/Typography'; // 追加
class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        {/* Rebootを追加 */}
        <Reboot />

        {/* ページタイトルを追加 */}
        <AppBar style={{ left: 240 }}> {/* styleを追加 */}
          <Toolbar>
            <Typography type="title" color="inherit">
              Yahoo!ショッピングランキング
            </Typography>
          </Toolbar>
        </AppBar>

        <Nav />
        <div style={{ marginTop: 64, paddig: 32 }}>
          <Switch>
            <Route path="/all" component={Ranking} />
            <Route
              path="/category/1"
              render={() => <Redirect to="/all" />}
            />
            <Route
              path="/category/:id"
              render={
                ({ match }) => <Ranking categoryId={match.params.id} />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;