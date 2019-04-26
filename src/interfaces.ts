/**
|--------------------------------------------------
| All the interfaces!!
|--------------------------------------------------
*/

export type Dispatch = React.Dispatch<IAction>
export type FavAction = (
  state: IState,
  dispatch: Dispatch,
  episode: IEpisode
) => IAction
export interface IState {
  episodes: Array<IEpisode>
  favourites: Array<IEpisode>
}

export interface IAction {
  type: string
  payload: Array<IEpisode> | any
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: { state: IState; dispatch: Dispatch }
  toggleFavAction: FavAction
  favourites: Array<IEpisode>
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string; original: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}
