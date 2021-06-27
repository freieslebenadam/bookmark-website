import React from 'react'
import '../style/FAQ.scss'
import QnA from './QnA'
import Button from './Button'

function FAQ() {
    return (
        <article id="faq">
            <div className="container">
                <section className="faq">
                    <div className="faq-info">
                        <h1>Frequently Asked Questions</h1>
                        <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                    </div>
                    <div className="faq-content">
                        <QnA 
                            q="What is Bookmark?" 
                            a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
                        />
                        <QnA 
                            q="How can I request a new browser?" 
                            a="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
                        />
                        <QnA 
                            q="Is there a mobile app?" 
                            a="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                            sollicitudin ex et ultricies bibendum."
                        />
                        <QnA 
                            q="What about other Chromium browsers?" 
                            a="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                            vitae neque eget nisl gravida pellentesque non ut velit."
                        />
                    </div>
                    <div className="faq-more">
                        <Button link="#faq">
                            More Info
                        </Button>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default FAQ