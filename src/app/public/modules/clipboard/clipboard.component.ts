import {
  Component,
  Input,
  ChangeDetectorRef
} from '@angular/core';

import {
  SkyAppWindowRef
} from '@skyux/core';

import {
  SkyCopyToClipboardService
} from './clipboard.service';

@Component({
  selector: 'sky-copy-to-clipboard',
  templateUrl: './clipboard.component.html'
})
export class SkyCopyToClipboardComponent {
  /**
   * Specifies the content to copy. This property binds data, so you must use brackets to
   * evaluate the template expression: `[copyTarget]`. Without the brackets, Angular treats
   * the value as a string and initializes the target property with the string value instead
   * of evaluating the data value.
   * @required
   */
  @Input()
  public copyTarget: HTMLElement;

  /**
   * Specifies a label for the copy to clipboard button.
   */
  @Input()
  public buttonText: string;

  /**
   * Specifies a label to display on the copy to clipboard button after users select it.
   */
  @Input()
  public buttonClickedText: string;

  public buttonActive: boolean = false;
  private timeout: any;
  private window: Window;

  constructor(
    private clipboardService: SkyCopyToClipboardService,
    private windowRef: SkyAppWindowRef,
    private cdr: ChangeDetectorRef
  ) {
    this.window = this.windowRef.nativeWindow;
  }

  public copyToClipboard() {
    this.buttonActive = true;
    this.clipboardService.copyContent(this.copyTarget);

    if (this.timeout) {
      this.window.clearTimeout(this.timeout);
    }

    this.timeout = this.window.setTimeout(() => {
      this.buttonActive = false;
      this.cdr.markForCheck();
    }, 1000);
  }
}
