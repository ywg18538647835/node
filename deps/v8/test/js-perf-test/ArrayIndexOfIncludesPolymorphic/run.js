// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

load('../base.js');
load(arguments[0] + '.js')

function PrintResult(name, result) {
  print(name + '-ArrayIndexOfIncludesPolymorphic(Score): ' + result);
}

function PrintStep(name) {}

function PrintError(name, error) {
  PrintResult(name, error);
}

BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError,
                           NotifyStep: PrintStep });
