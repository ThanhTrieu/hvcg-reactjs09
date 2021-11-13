import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from "antd";

const  PopularPage  = lazy(() => import("../pages/popular/index"));
const  UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const  SearchPage   = lazy(() => import('../pages/search/index'));

const RouteMovie = () => {
    return (
        <Router>
            <Suspense fallback={<Skeleton/>}>
                <Switch>
                    <Route path="/" exact>
                        <PopularPage/>
                    </Route>
                    <Route path="/popular-movie">
                        <PopularPage/>
                    </Route>
                    <Route path="/upcoming-movie">
                        <UpcomingPage/>
                    </Route>
                    <Route path="/search-movie">
                        <SearchPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(RouteMovie);