/*
 Copyright (c) Huawei Technologies Co., Ltd. 2020-2021.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/**
 * @category pipeline
 */

import { ccclass } from 'cc.decorator';
import { Camera } from '../../renderer/scene';
import { PIPELINE_FLOW_LIGHTING } from '../define';
import { IRenderFlowInfo, RenderFlow } from '../render-flow';
import { DeferredFlowPriority } from './enum';
import { LightingStage } from './lighting-stage';
import { RenderPipeline } from '../render-pipeline';

/**
 * @en The lighting flow in lighting render pipeline
 * @zh 前向渲染流程。
 */
@ccclass('LightingFlow')
export class LightingFlow extends RenderFlow {
    /**
     * @en The shared initialization information of lighting render flow
     * @zh 共享的前向渲染流程初始化参数
     */
    public static initInfo: IRenderFlowInfo = {
        name: PIPELINE_FLOW_LIGHTING,
        priority: DeferredFlowPriority.LIGHTING,
        stages: [],
    };

    public initialize (info: IRenderFlowInfo): boolean {
        super.initialize(info);
        if (this._stages.length === 0) {
            const lightingStage = new LightingStage();
            lightingStage.initialize(LightingStage.initInfo);
            this._stages.push(lightingStage);
        }
        return true;
    }

    public activate (pipeline: RenderPipeline) {
        super.activate(pipeline);
    }

    public render (camera: Camera) {
        super.render(camera);
    }

    public destroy () {
        super.destroy();
    }
}
