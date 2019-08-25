import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NumberRow from './NumberRow';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('<NumberRow />', () => {
    it('renders  <NumberRow /> components', () => {
      const snap = mount(<NumberRow phoneNumber={"098765543"}/>);
      expect(snap.length).toEqual(1);
    });
  
    it('renders  <NumberRow /> components', () => {
      const snap = mount(<NumberRow phoneNumber={"098765543"}/>);
      expect(snap.length).toEqual(1);
    });
  });

  it('calls handleInputChange', () => {
    const wrapper = mount(<App />);
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleInputChange');
    wrapper.find('input[name="numberInput"]').simulate('input', {
      target: { name: 'numberInput', value: 7 }
    })
    expect(handleChangeSpy.mock.calls.length).toEqual(0);
  });
  it('calls generateNumbers', () => {
    const wrapper = mount(<App />);
    const generateNumbersSpy = jest.spyOn(wrapper.instance(), 'generateNumbers');
    wrapper.find('button').simulate('click')
    expect(generateNumbersSpy.mock.calls.length).toEqual(0);
  });

  it('Generates numbers correctly', () => {
    expect(generateNumbers(4)).toBeTruthy();
  });
});


describe('<Row />', () => {
  it('renders  <Row /> components', () => {
    const snap = mount(<Row className data={{ index: "Index", phone: 'Phone Numbers' }} onClick={() => {}} />);
    expect(snap.length).toEqual(1);
  });

  it('renders  <Row /> components', () => {
    const snap = mount(<Row className={false} data={{ index: "Index", phone: 'Phone Numbers' }} onClick={() => { }} />);
    expect(snap.length).toEqual(1);
  });
});
});