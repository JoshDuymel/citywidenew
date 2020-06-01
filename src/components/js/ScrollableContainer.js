import React, { PureComponent } from "react";
import debounce from "lodash.debounce";
import "../css/ScrollableContainer.css";

export default class ScrollableContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    };

    this.checkForOverflow = this.checkForOverflow.bind(this);
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this);

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000);
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    );

    this.container = null;
  }

  componentDidMount() {
    this.checkForOverflow();
    this.checkForScrollPosition();

    this.container.addEventListener(
      "scroll",
      this.debounceCheckForScrollPosition
    );
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      "scroll",
      this.debounceCheckForScrollPosition
    );
    this.debounceCheckForOverflow.cancel();
  }

  componentDidUpdate(prevProps, prevState) {
      this.checkForOverflow();
      this.checkForScrollPosition();
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container;

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    });
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container;
    const hasOverflow = scrollWidth > clientWidth;
    this.setState({ hasOverflow });
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: "smooth" });
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state;
    return (
      <div className="item-controls">
        <button
          type="button"
          disabled={!canScrollLeft}
          onClick={() => {
            this.scrollContainerBy(-200);
          }}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={!canScrollRight}
          onClick={() => {
            this.scrollContainerBy(200);
          }}
        >
          Next
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="scrollable-container">
        <div
          className="item-container"
          ref={node => {
            this.container = node;
          }}
        >
          {this.props.children}
        </div>
        {this.buildControls()}
      </div>
    );
  }
}