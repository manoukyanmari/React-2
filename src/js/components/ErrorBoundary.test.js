import React from "react";
import {shallow} from "enzyme/build";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import ErrorBoundary from "./ErrorBoundary.jsx";


