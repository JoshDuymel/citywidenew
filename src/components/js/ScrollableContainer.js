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
      400
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
            id="controlArrow"
            type="button"
            disabled={!canScrollLeft}
            onClick={() => {
            this.scrollContainerBy(-400);
            }}
        >
            {/* Previous */}
            <svg width="42" height="10" viewBox="0 0 42 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.94975 8.40687L4.24264 9.11398L0 4.87134L0.707107 4.16423L4.94975 8.40687Z" fill="white"/>
                <path d="M4.2427 0.628662L4.9498 1.33577L0.707162 5.57841L0 4.87134L4.2427 0.628662Z" fill="white"/>
                <path d="M1.24268 4.37131H41.2427V5.37131H1.24268V4.37131Z" fill="white"/>
            </svg>
        </button>
        <button
        id="controlArrow"
            type="button"
            disabled={!canScrollRight}
            onClick={() => {
            this.scrollContainerBy(400);
            }}
        >
            {/* Next */}
            <svg width="42" height="10" viewBox="0 0 42 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7929 1.59309L37.5 0.885986L41.7427 5.12863L41.0356 5.83573L36.7929 1.59309Z" fill="white"/>
                <path d="M37.5 9.3713L36.7929 8.66419L41.0355 4.42155L41.7427 5.12863L37.5 9.3713Z" fill="white"/>
                <path d="M40.5 5.62865L0.5 5.62865L0.5 4.62865L40.5 4.62865V5.62865Z" fill="white"/>
            </svg>
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