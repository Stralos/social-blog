import CMS from "netlify-cms-app";
import { NetlifyCmsEditorComponentImage } from "netlify-cms-editor-component-image";
import { BlogPostPreview } from "./preview-templates/BlogPostPreview";
import { PodcastPostPreview } from "./preview-templates/PodcastPagePreview";
import { CategoriesControll, CategoriesPreview } from "./widgets/youtube";
import { YoutubeEditor } from "./editor/youtube";
import { Divider } from "./editor/divider";
import "./style.scss";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("podcast", PodcastPostPreview);

CMS.registerWidget("categories", CategoriesControll, CategoriesPreview);

CMS.registerEditorComponent(YoutubeEditor);
CMS.registerEditorComponent(Divider);
CMS.registerEditorComponent(NetlifyCmsEditorComponentImage);
