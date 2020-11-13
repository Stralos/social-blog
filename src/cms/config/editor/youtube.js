export const YoutubeEditor = {
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: "id", label: "Youtube Video ID", widget: "string" },
    { name: "description", label: "Video description", widget: "string" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<img src="http:\/\/img.youtube.com\/vi\/" (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      id: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: YoutubePreview,
  toPreview: YoutubePreview,
};

function YoutubePreview({ id }) {
  return `<img src="http://img.youtube.com/vi/${id}/maxresdefault.jpg" alt="Youtube Video"/>`;
}
