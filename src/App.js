import React from 'react';
import { Component } from 'react';
import Window from './components/Window';
import marked from 'marked';

const data = `
This is a text

**This is bold text**

__This is bold text too__

> This is Block Quote

# Heading
## Heading 2

- List item one
- List item two
- List item three

[Visit my GitHub](https://github.com/minm333)

This is a code \`console.log('Hello')\`

This is block code:
\`\`\`
let something = 'nothing';
let nothing = 'something';
console.log(something, nothing);
\`\`\`

![React Image](https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ)
`;

class App extends Component {
    state = {
        text: data,

        test: `# this is heading

        # heading two `,
    };

    componentDidMount() {}

    onChangeHandler = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div className="row">
                <div className="text-center col-5">
                    <Window heading="Editor" cssClasses="text-danger">
                        <textarea
                            onChange={(e) => this.onChangeHandler(e)}
                            value={this.state.text}
                            id="editor"
                            className="p-4"
                            style={{
                                height: '85vh',
                                width: '80%',
                                overflow: 'scroll',
                            }}
                        />
                    </Window>
                </div>
                <div className="text-center col-7">
                    <Window heading="Preview" cssClasses="text-primary">
                        <div
                            className="p-4 overflow-scroll"
                            id="preview"
                            dangerouslySetInnerHTML={{
                                __html: marked(this.state.text, {
                                    breaks: true,
                                }),
                            }}
                        ></div>
                    </Window>
                </div>
            </div>
        );
    }
}

export default App;
