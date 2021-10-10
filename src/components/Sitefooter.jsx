import React, { Component, Fragment } from 'react';

class Sitefooter extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
            <footer class="footer primary-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">voilk</h4>
                    		<div class="newsletter-widget">
                    			<p>Voilk is a content sharing platform, where your content is rewarded.</p>
		                        
                    		</div>
                    	</div>
                    </div>
                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Links</h4>
                    		<ul>
                    			<li><a href="https://www.voilk.com/faq.html">FAQs</a></li>
                    			<li><a href="https://www.voilk.com/tags">Categories</a></li>
                    			<li><a href="https://www.voilk.com/market">Internal Market</a></li>
                    			<li><a href="https://www.voilk.com/~witnesses">Witnesses</a></li>
                    		</ul>
                    	</div>
                    </div>

                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Cashier</h4>
                    		<ul>
                    		   <li><a href="https://affiliates.voilk.com/deposit">Deposit</a></li>
                    		   <li><a href="https://affiliates.voilk.com/withdraw">Withdraw</a></li>
                    		</ul>
                    	</div>
                    </div>

                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Tools</h4>
                    		<ul>
                    			<li><a href="https://graphql.voilk.com/graphql">GraphQL</a></li>
                    			<li><a href="https://explorer.voilk.com">Blockchain Explorer</a></li>
                    			<li><a href="https://github.com/voilk">Github Repo</a></li>
								<li><a href="https://www.voilk.com/change_password">Change Password</a></li>
                    		</ul>
                    	</div>
                    </div>

                    <div class="col-md-2 col-sm-2">
                    	<div class="widget clearfix">
                    		<h4 class="widget-title">Talk to us</h4>
                    		<ul>
                    			<li><a href="https://discord.gg/8a9w7rGnXn">Discord</a></li>
                    		</ul>
                    	</div>
                    </div>
                </div>
           	</div>
		</footer>

		<footer class="footer secondary-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <p>2021 &copy;<a href="/">voilk.com</a> All rights reserved.</p>
                    </div>
                </div>
            </div>
		</footer>
            </Fragment>
         );
    }
}
 
export default Sitefooter;
