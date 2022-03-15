import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, isCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render () {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    console.log(isCollectionFetching);
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverViewWithSpinner isLoading={ isCollectionFetching } {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={ !isCollectionsLoaded } {...props}/>} />
      </div>
    );
  }
}

const mapState = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: isCollectionsLoaded
});

const mapDispatch = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapState, mapDispatch)(ShopPage);