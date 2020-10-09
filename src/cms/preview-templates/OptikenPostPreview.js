import React from 'react'
import PropTypes from 'prop-types'
import { OptikenPostTemplate } from '../../templates/optiken-post'

// const OptikenPostPreview = ({ entry, widgetFor }) => (
//   <OptikenPostTemplate
//     image={entry.getIn(['data', 'image'])}
//     content={widgetFor('body')}
//     description={entry.getIn(['data', 'description'])}
//     title={entry.getIn(['data', 'title'])}
//     featured={entry.getIn(['data', 'featured'])}
//     vehicleData={entry.getIn(['data', 'vehicleData'])}
//   />
// )
//
// OptikenPostPreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

const OptikenPostPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
    return <OptikenPostTemplate data={data} />
}

OptikenPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default OptikenPostPreview
