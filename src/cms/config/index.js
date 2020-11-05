import CMS from "netlify-cms-app";
import { NetlifyCmsEditorComponentImage } from "netlify-cms-editor-component-image";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import { PodcastPostPreview } from "./preview-templates/PodcastPagePreview";
import "./style.scss";

import { CategoriesControll, CategoriesPreview } from "./widgets/youtube";
import { YoutubeEditor } from "./editor/youtube";
import { Divider } from "./editor/divider";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("podcast", PodcastPostPreview);

CMS.registerWidget("categories", CategoriesControll, CategoriesPreview);

CMS.registerEditorComponent(YoutubeEditor);
CMS.registerEditorComponent(Divider);
CMS.registerEditorComponent(NetlifyCmsEditorComponentImage);
