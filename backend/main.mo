import Map "mo:core/Map";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  let submissions = Map.empty<Text, ContactFormSubmission>();
  let gallery = Map.empty<Text, ProjectImage>();

  // Types
  type ContactFormSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactFormSubmission {
    public func compare(submission1 : ContactFormSubmission, submission2 : ContactFormSubmission) : Order.Order {
      Int.compare(submission1.timestamp, submission2.timestamp);
    };
  };

  type ProjectType = {
    #rooftop;
    #commercial;
  };

  type ProjectImage = {
    id : Text;
    blob : Storage.ExternalBlob;
    description : Text;
    projectType : ProjectType;
  };

  module ProjectImage {
    public func compareByProjectType(image1 : ProjectImage, image2 : ProjectImage) : Order.Order {
      switch (Text.compare(projectTypeToText(image1.projectType), projectTypeToText(image2.projectType))) {
        case (#equal) { Text.compare(image1.id, image2.id) };
        case (other) { other };
      };
    };
  };

  func projectTypeToText(pt : ProjectType) : Text {
    switch (pt) {
      case (#rooftop) { "Rooftop" };
      case (#commercial) { "Commercial" };
    };
  };

  // Contact Form Handling
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or phone.isEmpty() or message.isEmpty()) {
      Runtime.trap("All form fields are required. ");
    };

    let submission : ContactFormSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    submissions.add(submission.timestamp.toText(), submission);
  };

  // Gallery Management
  public shared ({ caller }) func addProjectImage(id : Text, blob : Storage.ExternalBlob, description : Text, projectType : ProjectType) : async () {
    let image : ProjectImage = {
      id;
      blob;
      description;
      projectType;
    };

    gallery.add(id, image);
  };

  // Query Functions
  public query ({ caller }) func getAllSubmissions() : async [ContactFormSubmission] {
    submissions.values().toArray();
  };

  public query ({ caller }) func getGalleryByProjectType(projectType : ProjectType) : async [ProjectImage] {
    gallery.values().toArray().filter(
      func(image) {
        image.projectType == projectType;
      }
    ).sort(ProjectImage.compareByProjectType);
  };

  public query ({ caller }) func getAllGalleryImages() : async [ProjectImage] {
    gallery.values().toArray();
  };
};
