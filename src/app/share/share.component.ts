import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';

@Component({
  selector: 'rxd-share',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './share.component.html'
})
export class ShareComponent {

  description = "explains the 'share' operator and how it's linked to multicast() and publish() as well as ConnectableObservable.";

  constructor() {
    // ConnectableObservable umschliesst ein "Source" Observable subscribed sich auf diesem aber solange nicht
    //   bis die eigene "connect"-Methode aufgerufen wird.
    //   --> so ist es z.b. möglich ein ConnectableObservable um ein Cold-Observable herum zu legen, dann verschiedene 
    //       Subscriber am ConnecteableObservable zu subscriben (die vom ConnecteableObservable an das umschlossene Subject weitergereicht werden)
    //       und mit "connect" auf dem ConnecteableObservable erst dann die Subscription auf dem inneren Cold-Observable zu starten 
    //       sobald alle Subscriber des ConnecteableObservable eingerichtet sind.
    // multicast ... erwartet Subject und verpackt dieses in ein ConnectableObservable
    // publish -> packt source observable in ein "Connectable Observable" ein und erzeugt das dafür notwendige Subject selbst.
    // --> ob via Konstruktor des "ConnecteableObservable", via multicast- oder publish-Operator muss in allen Fällen auf dem 
    //     gelieferten ConnecteableObservable "connect" aufgerufen werden um die Verarbeitung des Source Observable zu starten.
    // --> mittels des refCount() Operators ist es möglich dies automatisch zu tun. Der Operator sorgt dafür, daß bei mind. einem
    //     Subscriber die "connect" Methode des "ConnectableObservable" aufgerufen wird und auch, daß bei 0 Subscribern das
    //     "ConnectableObservable" unsubscribed.
    // share ist die Kombination aus publish() und refCount, d.h. Es liefert ein "Normales" Observable das seine Events an alle Subscriber multicasted
    
  }
}
