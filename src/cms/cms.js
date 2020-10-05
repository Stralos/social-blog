import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

import { CategoriesControll, CategoriesPreview } from "./widgets/youtube";
import { YoutubeEditor } from "./editor/youtube";

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.registerWidget("categories", CategoriesControll, CategoriesPreview);

CMS.registerEditorComponent(YoutubeEditor);
