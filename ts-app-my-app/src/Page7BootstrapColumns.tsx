function Page7BootstrapColumns() {
  return (
    <div>
      <div className="container-fluid mt-3">
        <h1>Three equal width columns</h1>
        <p>Note: Try to add a new div with className="col" inside the row className - this will create four equal-width columns.</p>
        <div className="row">
          <div className="col p-3 bg-primary text-white">.col</div>
          <div className="col p-3 bg-dark text-white">.col</div>
          <div className="col p-3 bg-primary text-white">.col</div>
        </div>

        <h1>Responsive Columns (col-sm-3)</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
          <div className="col-sm-3 p-3 bg-primary text-white">.col</div>
          <div className="col-sm-3 p-3 bg-dark text-white">.col</div>
          <div className="col-sm-3 p-3 bg-primary text-white">.col</div>
          <div className="col-sm-3 p-3 bg-dark text-white">.col</div>
        </div>

        <h1>Responsive Columns (col-md-3)</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
          <div className="col-sm-3 p-3 bg-primary text-white">.col</div>
          <div className="col-sm-3 p-3 bg-dark text-white">.col</div>
          <div className="col-sm-3 p-3 bg-primary text-white">.col</div>
          <div className="col-sm-3 p-3 bg-dark text-white">.col</div>
        </div>

        <h1>Responsive Columns (col-lg-3)</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
          <div className="col-lg-3 p-3 bg-primary text-white">.col</div>
          <div className="col-lg-3 p-3 bg-dark text-white">.col</div>
          <div className="col-lg-3 p-3 bg-primary text-white">.col</div>
          <div className="col-lg-3 p-3 bg-dark text-white">.col</div>
        </div>

        <h1>Responsive Columns (col-xl-3)</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
          <div className="col-xl-3 p-3 bg-primary text-white">.col</div>
          <div className="col-xl-3 p-3 bg-dark text-white">.col</div>
          <div className="col-xl-3 p-3 bg-primary text-white">.col</div>
          <div className="col-xl-3 p-3 bg-dark text-white">.col</div>
        </div>

        <h1>Responsive Columns (col-xxl-3)</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
          <div className="col-xxl-3 p-3 bg-primary text-white">.col</div>
          <div className="col-xxl-3 p-3 bg-dark text-white">.col</div>
          <div className="col-xxl-3 p-3 bg-primary text-white">.col</div>
          <div className="col-xxl-3 p-3 bg-dark text-white">.col</div>
        </div>

        <h1>Two Unequal Responsive Columns</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
          <div className="col-sm-4 p-3 bg-primary text-white">.col</div>
          <div className="col-sm-8 p-3 bg-dark text-white">.col</div>
        </div>
      </div>
    </div >
  );
}

export default Page7BootstrapColumns;