import React from "react";
import CMS from "netlify-cms-app";
import { NetlifyCmsEditorComponentImage } from "netlify-cms-editor-component-image";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import { registerPreviewTemplate } from "./helpers";
import { styleInjector } from "./helpers/styleInjector";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import { PodcastPostPreview } from "./preview-templates/PodcastPagePreview";

import { CategoriesControll, CategoriesPreview } from "./widgets/youtube";
import { YoutubeEditor } from "./editor/youtube";

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

registerPreviewTemplate("index", IndexPagePreview);
registerPreviewTemplate("about", AboutPagePreview);
registerPreviewTemplate("products", ProductPagePreview);
registerPreviewTemplate("blog", BlogPostPreview);
registerPreviewTemplate("podcast", PodcastPostPreview);

CMS.registerWidget("categories", CategoriesControll, CategoriesPreview);

CMS.registerEditorComponent(YoutubeEditor);
CMS.registerEditorComponent(NetlifyCmsEditorComponentImage);
