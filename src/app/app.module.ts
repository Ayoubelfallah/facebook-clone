import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { GroupsComponent } from './groups/groups.component';
import { GamingComponent } from './gaming/gaming.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FlickityModule } from 'ngx-flickity';
import { FormsModule } from "@angular/forms";

import { CreatePostComponent } from './home/components/create-post/create-post.component';
import { SideNavComponent } from './home/components/side-nav/side-nav.component';
import { SideNavItemsComponent } from './home/components/side-nav-items/side-nav-items.component';
import { SideNavShortcutsComponent } from './home/components/side-nav-shortcuts/side-nav-shortcuts.component';
import { StoryComponent } from './home/components/story/story.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './home/components/post-card/post-card.component';
import { RightNavComponent } from './home/components/right-nav/right-nav.component';
import { RightNavTitleComponent } from './home/components/right-nav-title/right-nav-title.component';
import { ContactsListComponent } from './home/components/contacts-list/contacts-list.component';
import { ContactItemComponent } from './home/components/contact-item/contact-item.component';
import { SponsersListComponent } from './home/components/sponsers-list/sponsers-list.component';
import { SponserItemComponent } from './home/components/sponser-item/sponser-item.component';
import { FriendsComponent } from './friends/friends.component';
import { SideNavFriendsComponent } from './friends/side-nav-friends/side-nav-friends.component';
import { SideNavFriendItemsComponent } from './friends/side-nav-friend-items/side-nav-friend-items.component';
import { FriendCardsComponent } from './friends/friend-cards/friend-cards.component';
import { FriendCardItemComponent } from './friends/friend-card-item/friend-card-item.component';
import { PopDetailComponent } from './friends/pop-detail/pop-detail.component';
import { ProfileIconComponent } from './home/components/profile-icon/profile-icon.component';
import { CreateRoomComponent } from './home/components/create-room/create-room.component';
import { ProfileCardComponent } from './home/components/profile-card/profile-card.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { SideNavMarketplaceComponent } from './marketplace/side-navbar/side-nav-marketplace/side-nav-marketplace.component';
import { SideNavMarketplaceitemsComponent } from './marketplace/side-navbar/side-nav-marketplaceitems/side-nav-marketplaceitems.component';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { SideContainerComponent } from './navbar/side-container/side-container.component';
import { WatchCardComponent } from './watch/watch-card/watch-card.component';
import { SidebarComponent } from './gaming/sidebar/sidebar.component';
import { CarouselComponent } from './gaming/carousel/carousel.component';
import { FeaturedGamesComponent } from './gaming/featured-games/featured-games.component';
import { PostsComponent } from './gaming/posts/posts.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreatePostDialogComponent } from './home/components/create-post-dialog/create-post-dialog.component';
import { ModalComponent } from './auth-page/modal/modal.component';
import { CommentsSectionComponent } from './home/components/comments-section/comments-section.component';
import { PostItemsComponent } from './home/components/post-items/post-items.component';
import { CommentBoxComponent } from './home/components/comment-box/comment-box.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TajribComponent } from './tajrib/tajrib.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WatchComponent,
    MarketplaceComponent,
    GroupsComponent,
    GamingComponent,
    AuthPageComponent,
    CreatePostComponent,
    SideNavComponent,
    SideNavItemsComponent,
    SideNavShortcutsComponent,
    StoryComponent,
    PostCardComponent,
    RightNavComponent,
    RightNavTitleComponent,
    ContactsListComponent,
    ContactItemComponent,
    SponsersListComponent,
    SponserItemComponent,
    FriendsComponent,
    SideNavFriendsComponent,
    SideNavFriendItemsComponent,
    FriendCardsComponent,
    FriendCardItemComponent,
    PopDetailComponent,
    ProfileIconComponent,
    CreateRoomComponent,
    ProfileCardComponent,
    CreateStoryComponent,
    SideNavMarketplaceComponent,
    SideNavMarketplaceitemsComponent,
    SideContainerComponent,
    WatchCardComponent,
    SidebarComponent,
    CarouselComponent,
    FeaturedGamesComponent,
    PostsComponent,
    CreatePostDialogComponent,
    ModalComponent,
    CommentsSectionComponent,
    PostItemsComponent,
    CommentBoxComponent,
    CapitalizePipe,
    TajribComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    FlickityModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
