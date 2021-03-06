import React from 'react';
import PropTypes from 'prop-types';
import View from '../atoms/View';
import Tab from '../atoms/Tab';
import Title from '../atoms/Title';
import TitleContainer from '../atoms/TitleContainer';
import Img from '../atoms/Img';
import Space from '../atoms/Space';
import InfoIcon from '../../assets/images/svg/info.svg';

class Tabs extends React.Component {
  state = {
    selectedTabIndex:
      React.Children.map(this.props.children, (tab, index) =>
        tab.props.defaultSelected ? index : null
      ).find((index) => index !== null) || 0,
  };

  onTabClick = ({ index, title }) => () => {
    const { selectedTabIndex } = this.state;
    const { onChange } = this.props;

    if (index !== selectedTabIndex) {
      this.setState({ selectedTabIndex: index });
      onChange({ index, title });
    }
  };

  render() {
    const { selectedTabIndex } = this.state;
    const { className, children } = this.props;

    return (
      <View className={className}>
        <TitleContainer>
          {React.Children.map(children, (tab, index) => (
            <Title
              size="xxs"
              isSelected={index === selectedTabIndex}
              onClick={this.onTabClick({ index, title: tab.props.title })}
            >
              {tab.props.title}
            </Title>
          ))}
          <Space margin={[0, 0, 0, 'auto']}>
            <Img src={InfoIcon} alt="info icon" />
          </Space>
        </TitleContainer>
        {children[selectedTabIndex]}
      </View>
    );
  }
}

Tabs.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

Tabs.defaultProps = {
  onChange: () => {},
};

Tabs.Tab = Tab;

export default Tabs;
