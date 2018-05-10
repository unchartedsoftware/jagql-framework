/**
 * @module @jagql/framework
 */
import {Schema} from 'joi'
import {Handler} from '@jagql/framework/lib/handlers/Handler'

export type BaseType = {
  id?: string
  type: string
}
export type ResourceAttributes<Item> = {
  [x in keyof Item]: Schema
  }

export type PrimaryKeyType = 'autoincrement' | 'uuid'

export interface ResourceConfig<Item> {
  namespace?: string,
  resource: string,
  handlers: Handler
  primaryKey: PrimaryKeyType,
  attributes: ResourceAttributes<Item>
  examples: (BaseType & Item)[]
}
