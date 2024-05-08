const _ = require ( 'lodash' )

/*
 *
 * Mark’s libraries.
 *
 */

export function isUseless ( child ) { return  _.isNil ( child ) || _.isNull ( child ) || _.isNaN ( child ) || ( ( _.isSet ( child ) || _.isArray ( child ) || _.isObject ( child ) || _.isMap ( child ) ) && _.isEmpty ( child ) ) || ( _.isString ( child ) && _.trim ( child ) === "" ) }
export function anyUseless ( children ) { return _.some ( children, ( child ) => { return isUseless ( child ) } ) }
export function allUseless ( children ) { return _.every ( children, ( child ) => { return isUseless ( child ) } ) }
