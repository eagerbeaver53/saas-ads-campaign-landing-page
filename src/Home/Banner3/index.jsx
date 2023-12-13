import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button, Row, Col } from 'antd';
import { Element } from 'rc-scroll-anim';
import { Input, Icon } from 'antd';
import "./banner3.less"

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner3',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <Row type="flex" justify={"space-between"} className={`${className}`} gutter={1}>
          <Col sm={24} md={8}>
            <QueueAnim
              type={'right'}
              delay={2000}
            >
              <div className={`${className}-img-wrapper`} key="beauty">
              </div>
              {/* <div className="trulyamni-img" key="trulyamni"></div>
              <div className="px-[18px] py-[19px] stats-box flex-col items-start h-[106.16px]" key="stats-box">
                <p className="conversion mb-[5.8px]">Conversion</p>
                <p className='flex w-full  mb-[9px]'>
                  <p className='ads-count'>9350</p>
                  <p className='roi-pcnt ml-auto'>
                    <Icon type="arrow-up" />
                    <span>8.46%</span>
                  </p>
                </p>
                <p className="progress-bar bg-[#E8F2FF] h-[11.37px]">
                  <div className='bg-[#FDBC64] w-[70%] h-full'></div>
                </p>
              </div> */}
            </QueueAnim>
          </Col>
          <Col sm={24} md={15}>
            <QueueAnim
              type={'bottom'}
              className={`${className}-text-wrapper flex-1`}
              delay={1000}
            >
              <h1 key="h1" className="heading-info">Optimize Your Ad Copy and Images with Advanced Machine Learning Algorithms</h1>
              <p className="main-info" key="p">
                Our platform leverages advanced machine learning algorithms to help you generate compelling ad copy and images that maximize your advertising ROI.
              </p>

              <div className="get-started rounded-r-[30px]">
                <span>Get Started</span>
                <Icon type="arrow-right" />
              </div>

            </QueueAnim>
          </Col>

        </Row>
      </Element>
    );
  }
}

export default Banner;
