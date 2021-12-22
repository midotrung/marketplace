import { connect } from 'react-redux'
import { MapStateProps, MapDispatchProps } from './Sales.types'
import Sales from './Sales'
import { Dispatch } from 'redux'
import { fetchSalesRequest } from '../../modules/sale/actions'
import { getAddress } from '../../modules/wallet/selectors'
import { RootState } from '../../modules/reducer'

const mapState = (state: RootState): MapStateProps => {
  return {
    address: getAddress(state)!,
    sales: []
  }
}

const mapDispatch = (dispatch: Dispatch): MapDispatchProps => {
  return {
    onFetchSales: filters => dispatch(fetchSalesRequest(filters))
  }
}

export default connect(mapState, mapDispatch)(Sales)
