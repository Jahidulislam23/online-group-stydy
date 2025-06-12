import Lottie from "lottie-react";
import React from "react";
import Faq from '../assets/lottis/faq.json'

const FaqSection = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <Lottie animationData={Faq} loop={true}></Lottie>
          <div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                ❓ 1. How can I create a new assignment?
              </div>
              <div className="collapse-content text-sm">
                You must be logged in to create an assignment. Go to the “Create Assignment” page, then fill in the title, description, marks, thumbnail URL, difficulty level, and due date. Click the submit button to create the assignment.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                ❓ 2. Can I delete someone else's assignment?
              </div>
              <div className="collapse-content text-sm">
                No, you can only delete assignments that you created. If you try to delete an assignment created by someone else, the system will show an error message.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                ❓ 3. How can I submit an assignment?
              </div>
              <div className="collapse-content text-sm">
                Click the “View Assignment” button, then click on “Take Assignment”. A modal or page will open with a submission form. You can submit the Google Docs link and a quick note to complete your submission. It will be marked as “Pending” by default.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                ❓ 4. How can I evaluate someone else's assignment?
              </div>
              <div className="collapse-content text-sm">
                Go to the “Pending Assignments” page. You’ll see a list of all unmarked assignments. Click the “Give Mark” button to open the evaluation form. You can view the submitted Google Docs, add feedback, assign marks, and submit your review.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                ❓ 5. Can I give marks to my own submission?
              </div>
              <div className="collapse-content text-sm">
                No, users are not allowed to grade their own submitted assignments. The system automatically blocks self-evaluation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
