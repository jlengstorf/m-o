import React from 'react'

if (typeof window !== 'undefined') {
  const getBrowserHiddenProps = () => {
    let hidden, visibilityChange
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }

    return {
      hidden,
      visibilityChange
    }
  }

  const { hidden, visibilityChange } = getBrowserHiddenProps()


  if (typeof document.addEventListener !== "undefined" && typeof hidden !== "undefined") {
    document.addEventListener(visibilityChange, () => {
      if (document[hidden]) {
        document.title = "Military-Optics"
      } else {
        document.title = "Militärische Optiken und mehr"
      }
    }, false)
  }
}


class DynamicBrowserTabTitle extends React.Component {
  render () {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default DynamicBrowserTabTitle
