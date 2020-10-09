import React from 'react'
import PropTypes from 'prop-types'
import { DatenschutzPageTemplate } from '../../templates/datenschutz-page'

// const DatenschutzPagePreview = ({ entry, widgetFor }) => (
//   <DatenschutzPageTemplate
//     bgimage={entry.getIn(['data', 'bgimage'])}
//     title={entry.getIn(['data', 'title'])}
//     content={widgetFor('body')}
//   />
// )

const DatenschutzPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return <DatenschutzPageTemplate data={data} />
}

DatenschutzPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

// DatenschutzPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

export default DatenschutzPagePreview
