/**
 * Copyright 2012 {<ANVIL_COPYRIGHT>}. All Rights Reserved.
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * @fileoverview {<ANVIL_PROJECT_NAMESPACE>} defines and utilities.
 *
 * @author {<ANVIL_AUTHOR_EMAIL>} ({<ANVIL_AUTHOR_NAME>})
 */

goog.provide('{<ANVIL_PROJECT_NAMESPACE>}');


/**
 * Version identifier.
 * TODO(benvanik): something sane
 * @const
 * @type {number}
 */
{<ANVIL_PROJECT_NAMESPACE>}.VERSION = 1;


/**
 * @define {boolean} True if running under node. Guard all node code with this
 * define to ensure it does not leak into web code.
 */
{<ANVIL_PROJECT_NAMESPACE>}.NODE = false;


/**
 * Dummy exported method.
 */
{<ANVIL_PROJECT_NAMESPACE>}.someMethod = function() {
  window.console.log('hello world');
};
