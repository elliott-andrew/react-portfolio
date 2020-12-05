import React from 'react';

const Contact = () => {
    return (
        <main class="container" id="main">
            <div class="row">
                <div class="col-md-12">
                    <h1>Contact</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-9 mt-3">

                    <form action="mailto:andrewjc.elliott@gmail.com" method="post" enctype="text/plain">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Your Email address</label>
                            <input name="mail" type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Enter Message</label>
                            <textarea name="comment" class="form-control" id="exampleFormControlTextarea1"
                                rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>

                    </form>
                </div>
                <address class="col-md-3">
                    <table class="table table-borderless mt-4">

                        <tbody>
                            <tr>
                                {/* <!-- Resume --> */}
                                <th scope="row">Resume</th>
                                <td><a href="/resume">View Here</a></td>
                            </tr>
                            <tr>
                                {/* <!-- Email Address --> */}
                                <th scope="row">Email</th>
                                <td><a href="mailto:andrewjc.elliott@gmail.com">Click Here</a></td>
                            </tr>

                            <tr>
                                {/* <!-- Social Media --> */}
                                <th scope="row">Instagram</th>
                                <td><a href="http://www.instagram.com/throwshade/">@throwshade</a></td>
                            </tr>
                        </tbody>
                    </table>
                </address>
            </div>
        </main>
    )
}

export default Contact