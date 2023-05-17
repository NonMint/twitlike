import React from 'react';

const AddTweet = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Compose a Tweet</h5>
              <form>
                <div className="form-group">
                  <textarea className="form-control" rows={3} placeholder="What's happening?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Tweet</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;