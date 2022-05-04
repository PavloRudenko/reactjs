import { IControls } from './Controls'
import { IPreview } from './Preview'
import { IMetaData } from './TextContent/MetaData'
import { ITitle } from './TextContent/Title'

export type IPost = IPreview & ITitle

export interface ICard {
  id: number | string
  metaData: IMetaData
  postData: IPost
  controlsData: IControls
}
