import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ImpressumPagePreview from './preview-templates/ImpressumPagePreview'
import DatenschutzPagePreview from './preview-templates/DatenschutzPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import OptikenPostPreview from './preview-templates/OptikenPostPreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import FooterPreview from './preview-templates/FooterPreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('impressum', ImpressumPagePreview)
CMS.registerPreviewTemplate('datenschutz', DatenschutzPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('optiken', OptikenPostPreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
