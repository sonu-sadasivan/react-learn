function Page8BootstrapTypographyHeadings() {
  return (
    <div>
      <div className="container mt-3">
        <p>The font-size of each Bootstrap heading depends on the screen size. Try to resize the browser window to see the effect.</p>
        <h1>h1 Bootstrap heading</h1>
        <h2>h2 Bootstrap heading</h2>
        <h3>h3 Bootstrap heading</h3>
        <h4>h4 Bootstrap heading</h4>
        <h5>h5 Bootstrap heading</h5>
        <h6>h6 Bootstrap heading</h6>
      </div>

      <div className="container mt-3">
        <p className="h1">h1 Bootstrap heading</p>
        <p className="h2">h2 Bootstrap heading</p>
        <p className="h3">h3 Bootstrap heading</p>
        <p className="h4">h4 Bootstrap heading</p>
        <p className="h5">h5 Bootstrap heading</p>
        <p className="h6">h6 Bootstrap heading</p>
      </div>

      <div className="container mt-3">
        <h1>Display Headings</h1>
        <p>Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight):</p>
        <h1 className="display-1">Display 1</h1>
        <h1 className="display-2">Display 2</h1>
        <h1 className="display-3">Display 3</h1>
        <h1 className="display-4">Display 4</h1>
        <h1 className="display-5">Display 5</h1>
        <h1 className="display-6">Display 6</h1>
      </div>

      <div className="container mt-3">
        <h1>Smaller, Secondary Text</h1>
        <p>The small element (and the .small className) is used to create a smaller, secondary text in any heading:</p>
        <h1>h1 heading <small>secondary text</small></h1>
        <h2>h2 heading <small>secondary text</small></h2>
        <h3>h3 heading <small>secondary text</small></h3>
        <h4>h4 heading <small>secondary text</small></h4>
        <h5>h5 heading <small>secondary text</small></h5>
        <h6>h6 heading <small>secondary text</small></h6>
      </div>

      <div className="container mt-3">
        <h1>Highlight Text</h1>
        <p>Use the mark element (or the .mark className) to <mark>highlight</mark> text.</p>
      </div>

      <div className="container mt-3">
        <h1>Abbreviations</h1>
        <p>The abbr element is used to mark up an abbreviation or acronym:</p>
        <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
      </div>

      <div className="container mt-3">
        <h1>Blockquotes</h1>
        <p>The blockquote element is used to present content from another source:</p>
        <blockquote className="blockquote">
          <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
          <footer className="blockquote-footer">From WWF's website</footer>
        </blockquote>
      </div>

      <div className="container mt-3">
        <h1>Description Lists</h1>
        <p>The dl element indicates a description list:</p>
        <dl>
          <dt>Coffee</dt>
          <dd>- black hot drink</dd>
          <dt>Milk</dt>
          <dd>- white cold drink</dd>
        </dl>
      </div>

      <div className="container mt-3">
        <h1>Code Snippets</h1>
        <p>Inline snippets of code should be embedded in the code element:</p>
        <p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>
      </div>

      <div className="container mt-3">
        <h1>Keyboard Inputs</h1>
        <p>To indicate input that is typically entered via the keyboard, use the kbd element:</p>
        <p>Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p>
      </div>

      <div className="container mt-3">
        <h1>Multiple Code Lines</h1>
        <p>For multiple lines of code, use the pre element:</p>
        <pre>
          Text in a pre elements
          is displayed in a fixed-width
          font, and it preserves
          both      spaces and
          line breaks
        </pre>
      </div>
    </div>
  );
}

export default Page8BootstrapTypographyHeadings;