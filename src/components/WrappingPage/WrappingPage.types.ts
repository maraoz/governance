import { Dispatch } from 'redux'
import { connectWalletRequest, ConnectWalletRequestAction } from 'decentraland-dapps/dist/modules/wallet/actions'
import { Wallet } from 'modules/wallet/types'
import { registerLandBalanceRequest, registerEstateBalanceRequest, RegisterLandBalanceRequestAction, RegisterEstateBalanceRequestAction, wrapManaRequest, WrapManaRequestAction } from 'modules/wallet/actions'
import { CallHistoryMethodAction } from 'connected-react-router'

export type State = {
  value?: number
}

export type DefaultProps = {}

export type Props = DefaultProps & {
  isConnected: boolean
  isConnecting: boolean
  isEnabling: boolean
  isLoading: boolean
  isRegisteringLand: boolean
  isRegisteringEstate: boolean
  isWrappingMana: boolean
  isUnwrappingMana: boolean
  wallet: Wallet | null | undefined
  onConnect: typeof connectWalletRequest
  onNavigate: (path: string) => void
  onWrapToken: typeof wrapManaRequest
  onUnwrapToken: typeof wrapManaRequest
  onRegisterLand: typeof registerLandBalanceRequest
  onRegisterEstate: typeof registerEstateBalanceRequest
}

export type MapStateProps = Pick<Props, 'isConnected' | 'isConnecting' | 'isEnabling' | 'isLoading' | 'isRegisteringLand' | 'isRegisteringEstate' | 'isWrappingMana' | 'isUnwrappingMana' | 'wallet'>
export type MapDispatchProps = Pick<Props, 'onConnect' | 'onNavigate' | 'onRegisterLand' | 'onRegisterEstate' | 'onWrapToken' | 'onUnwrapToken'>
export type MapDispatch = Dispatch<ConnectWalletRequestAction | CallHistoryMethodAction | RegisterEstateBalanceRequestAction | RegisterLandBalanceRequestAction | WrapManaRequestAction>
