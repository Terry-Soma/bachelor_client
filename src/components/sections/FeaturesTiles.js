import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from './SectionProps';
import SectionHeader from './SectionHeader';
import './style.css';
import {IoHelpSharp} from 'react-icons/io5'
import feature1 from './../../assets/img/feature-tile-icon-01.svg'
import feature2 from './../../assets/img/feature-tile-icon-02.svg'
import feature3 from './../../assets/img/feature-tile-icon-03.svg'
import feature4 from './../../assets/img/feature-tile-icon-04.svg'
import feature5 from './../../assets/img/feature-tile-icon-05.svg'
import feature6 from './../../assets/img/feature-tile-icon-06.svg'

import Image from './ElementImage';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Элсэхэд анхаарах зүйлс'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
          <div className="tiles-item reveal-from-bottom hoverr">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                      <IoHelpSharp style={{height:"64px", width:"64px", color:"#fff4f4"}}/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Тусламж
                    </h4>
                  <p className="m-0 text-sm">
                   Тусламж цэснээс хэрхэн бүртгүүлэх, мэргэжил сонгох талаарх дэлгэрэнгүй видео
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom hoverr">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature1}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Бүртгүүлэх
                    </h4>
                  <p className="m-0 text-sm">
                    Бүртгэлийн үнэлгээний төвийн дугаараар бүртгүүлнэ
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature2}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Хөтөлбөрүүд
                    </h4>
                  <p className="m-0 text-sm">
                    Хөтөлбөрүүдийн талаарх мэдээллүүдийг ХӨТӨЛБӨРҮҮД цэснээс дэлгэрэнгүй 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature3}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Салбар сургууль
                    </h4>
                  <p className="m-0 text-sm">
                    Салбар сургуулиудын мэдээллийг САЛБАР СУРГУУЛЬ цэснээс дэлгэрэнгүй
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature4}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Хувийн мэдээлэл
                    </h4>
                  <p className="m-0 text-sm">
                    Та өөрийнхөө БҮТ дугаараар бүртгүүлэн, бүртгэлээ баталгаажуулсныхаа дараагаар хувийн мэдээллээ оруулна уу
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature5}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Мэргэжил сонголт
                    </h4>
                  <p className="m-0 text-sm">
                    Та хувийн мэдээллээ оруулсны дараагаар мэргэжил сонголтоо хийнэ үү
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature6}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Бүртгэл
                    </h4>
                  <p className="m-0 text-sm">
                    Бүртгүүлсэн мэдээлэл болон сонгосон мэргэжлээ ХУВИЙН МЭДЭЭЛЭЛ цэснээс харна уу.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;