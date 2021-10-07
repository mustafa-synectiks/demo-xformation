import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import CasePostPreview from './preview-templates/CasePostPreview';
import SurveyTemplate from './preview-templates/SurveyPreview';
import ScenarioPagePreview from './preview-templates/ScenarioPagePreview';
import ServicePagePreview from './preview-templates/ServicePostPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('case', CasePostPreview);
CMS.registerPreviewTemplate('survey', SurveyTemplate);
CMS.registerPreviewTemplate('scenario', ScenarioPagePreview);
CMS.registerPreviewTemplate('service', ServicePagePreview);
