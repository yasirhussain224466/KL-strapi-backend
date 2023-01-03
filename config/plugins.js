
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: "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",
      },
      settings: {
        defaultFrom: "contact@kodexolabs.com",
        defaultReplyTo: "contact@kodexolabs.com",
      },
    },
  },

  scheduler: {
    enabled: true,
    config: {
      model: "scheduler",
    },
  },
  comments: {
    enabled: true,
    config: {
      badWords: false,
      // moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::blog.blog"],
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {
        auth: false
      },
    },
  },
  seo: {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
    editor: {
      removePlugins: [""],
    },
    toolbar: {
      items: [
        "paragraph",
        "heading1",
        "heading2",
        "|",
        "bold",
        "italic",
        "fontColor",
        "fontBackgroundColor",
        "fontFamily",
        "underline",
        "fontSize",
        "removeFormat",
        "|",
        "bulletedList",
        "todoList",
        "numberedList",
        "|",
        "alignment",
        "outdent",
        "indent",
        "horizontalLine",
        "|",
        "StrapiMediaLib",
        "insertTable",
        "blockQuote",
        "mediaEmbed",
        "link",
        "highlight",
        "|",
        "htmlEmbed",
        "sourceEditing",
        "code",
        "codeBlock",
        "|",
        "subscript",
        "superscript",
        "strikethrough",
        "specialCharacters",
        "|",
        "heading",
        "fullScreen",
        "undo",
        "redo",
      ],
    },
    fontFamily: {
      options: [
        "default",
        "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
        "Courier New, Courier, monospace",
        "Georgia, serif",
        "Lucida Sans Unicode, Lucida Grande, sans-serif",
        "Tahoma, Geneva, sans-serif",
        "Times New Roman, Times, serif",
        "Trebuchet MS, Helvetica, sans-serif",
        "Verdana, Geneva, sans-serif",
        "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
      ],
      supportAllValues: true,
    },
    image: {
      resizeUnit: "%",
      resizeOptions: [
        {
          name: "resizeImage:original",
          value: null,
          icon: "original",
        },
        {
          name: "resizeImage:25",
          value: "25",
          icon: "small",
        },
        {
          name: "resizeImage:50",
          value: "50",
          icon: "medium",
        },
        {
          name: "resizeImage:75",
          value: "75",
          icon: "large",
        },
      ],
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
        "resizeImage:25",
        "resizeImage:50",
        "resizeImage:75",
        "resizeImage:original",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
        "toggleTableCaption",
      ],
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: "img",
          attributes: {
            sizes: true,
            loading: true,
          },
        },
      ],
    },
  },
});
